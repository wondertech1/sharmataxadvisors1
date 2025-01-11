
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Youtube from '@mui/icons-material/YouTube';

const SocialMediaButtons = () => {
return (
<div>
  <IconButton
    color="inherit"
    aria-label="Facebook"
    size="large"
    onClick={() => window.open('https://www.facebook.com/yourpage')}
  >
    <FacebookIcon fontSize='large' sx={{ color: "white" }}/>
  </IconButton>

  <IconButton
    color="primary"
    aria-label="Twitter"
    onClick={() => window.open('https://twitter.com/yourhandle')}
  >
    <TwitterIcon fontSize='large' sx={{ color: "white" }}/>
  </IconButton>

  <IconButton
    color="primary"
    aria-label="Instagram"
    onClick={() => window.open('https://www.instagram.com/yourusername')}
  >
    <InstagramIcon fontSize='large' sx={{ color: "white" }}/>
  </IconButton>

  <IconButton
    color="primary"
    aria-label="Instagram"
    onClick={() => window.open('https://www.instagram.com/yourusername')}
  >
    <LinkedInIcon fontSize='large' sx={{ color: "white" }}/>
  </IconButton>


  <IconButton
    color="primary"
    aria-label="Instagram"
    onClick={() => window.open('https://www.instagram.com/yourusername')}
  >
    <Youtube fontSize='large' sx={{ color: "white" }}/>
  </IconButton>
</div>
);
};

export default SocialMediaButtons;