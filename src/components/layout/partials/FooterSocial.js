import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a class="linkedin_icon" href="https://www.linkedin.com/company/sidekick-eip/">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16">
  <title>LinkedIn</title>
  <path
    d="M12.953,0H3.047C1.372,0,0,1.372,0,3.047v9.906C0,14.628,1.372,16,3.047,16h9.906c1.675,0,3.047-1.372,3.047-3.047V3.047C16,1.372,14.628,0,12.953,0zM4.71,12.328H2.328V6.032h2.383V12.328zM3.516,5.393c-0.672,0-1.219-0.547-1.219-1.219c0-0.671,0.547-1.219,1.219-1.219c0.672,0,1.219,0.547,1.219,1.219C4.734,4.846,4.187,5.393,3.516,5.393zM12.328,12.328h-2.383v-3.43c0-0.812-0.014-1.857-1.132-1.857c-1.133,0-1.307,0.883-1.307,1.797v3.489H5.219V6.032h2.203v0.957h0.031c0.307-0.583,1.055-1.2,2.172-1.2c2.327,0,2.754,1.533,2.754,3.526V12.328z"
  />
</svg>

          </a>
        </li>
        <li>
          <a class="instagram_icon" href="https://www.instagram.com/sidekick_eip">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1" />
                <path
                  d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path
                  d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;