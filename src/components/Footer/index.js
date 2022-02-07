import react from 'react';
import './footer.css';

function Footer() {
    return (
        <section class='footer'>
            <div class='footer-wrap'>
                <div class='footer-logo'>
                    <a to='/' className='social-logo'>
                        <i class="fas fa-less-than"></i>
                        Charlie  /
                        <i class="fas fa-greater-than"></i>
                    </a>
                </div>
                <small class='website-rights'>Charlie © 2022</small>
                <div class='social-icons'>
                    <a
                        class='social-icon-link'
                        href='https://www.linkedin.com/in/charlie-cruz-a31ab2225'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i class='fab fa-linkedin' />
                    </a>
                    <a
                        class='social-icon-link'
                        href="https://github.com/Ccruz13"
                        target='_blank'
                        aria-label='GitHub'
                    >
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer;