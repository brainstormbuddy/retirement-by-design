export default (data: {
  firstName: string;
  oneOnOne?: boolean;
  estate?: boolean;
  from: string;
}) => {
  return `
        <p>Hello, ${data.firstName}</p>

        <br />

        <p>
            I am looking forward to seeing you at our next webinar to discuss ${
              data.estate ? 'about how to protect your estate.' : ''
            }taxes and retirement. 
            You will receive a separate email to remind you and join us.
        </p>

        <br />

        <p>
        ${
          data.estate
            ? `I will touch on how to properly plan for your estate so that you don’t end intestate, 
            but I’ll also touch on things like net family property, Your children and grandchildren, 
            how beneficiary designations work, and also how your legacy can leave behind some charitable giving.`
            : `In the meantime, I want to remind you that this webinar is entirely free and there is no obligations. 
            What you'll takeaway from the taxes and retirement webinar is the process behind what it means to actually
            retire by design, and it all starts with a written plan. I will touch on limiting your tax liability,
            and how to minimize your risk of outliving your money to name a few.`
        }
        </p>

        <br />

        ${
          data?.oneOnOne
            ? `  <p>
                I also noticed you were interested in a free, 30-minute one-on-one discussion with me.
                Please select a date and time to meet with me here:
            <p>
                <a href="https://outlook.office365.com/owa/calendar/GabriellaVasconcelos@sfl.ca/bookings/s/o03GBuIolkW2dQbBm9N1fw2">
                    https://outlook.office365.com/owa/calendar/GabriellaVasconcelos@sfl.ca/bookings/s/o03GBuIolkW2dQbBm9N1fw2
                </a>
            </p>

            <br />`
            : ''
        }
          
        <p>
            If you have any questions do not hesitate to get back to me.
        </p>

        <br />
        <p>
            Regards,<br />
            ${data.from}
        </p>
    `;
};
