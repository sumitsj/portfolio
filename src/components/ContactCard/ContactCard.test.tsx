import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ContactCard, { ContactCardIcons } from './ContactCard';

describe("Skills Component", () => {
    test("Should match snapshot", () => {
        const tree = renderer.create(getComponent()).toJSON();

        expect(tree).toMatchInlineSnapshot(`
<div
  className="contact-card"
>
  <div
    className="contact-card-label"
  >
    test-title
  </div>
  <a
    className="contact-card-link"
    href="random-link"
    rel="noreferrer"
    target="_blank"
  >
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      style={
        Object {
          "color": undefined,
        }
      }
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0h24v24H0V0z"
        fill="none"
      />
      <path
        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
      />
    </svg>
    john
  </a>
</div>
`);


    });

    test("Should render with correct skills", () => {
        render(getComponent());

        const elements = screen.getAllByRole("link");

        expect(elements).toHaveLength(1);
        expect(elements.at(0)).toHaveTextContent("john");
        expect(elements.at(0)).toHaveAttribute("href", "random-link");
    })

    function getComponent() {
        return <ContactCard title='test-title' details={[{ text: "john", link: "random-link", icon: ContactCardIcons.EMAIL }]} />;
    }
});