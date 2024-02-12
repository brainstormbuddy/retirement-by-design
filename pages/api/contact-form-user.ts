export default (data: { firstName: string }) => {
  return `
        <p>Hello, ${data.firstName}</p>

        <br />

        <p>
           Glad to see you are taking the first steps in retiring by design. 
           You can download your free digital copy of The Pursuit of Retirement.
        </p>

        <br />

        <p>
  Or you can always read it on our website at your convenience: <a href="https://retirementby.design/book/the-pursuit-of-retirement">The Pursuit of Retirement</a>
        </p>

        <br />
        <p>
            Regards,<br />
            Shawn Bellefeuille
        </p>
    `;
};
