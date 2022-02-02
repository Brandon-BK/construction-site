import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Card = ({ src, name, title, description }) => {
  return (
      <>
        <Box style={{width:300,height:400,display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
            <img src={src} style={{width:'100%',height:'190px',objectFit:'cover',filter:'greyscale(0.2)'}} />

            <Typography style={{width:'100%',fontSize:25}}>{name}</Typography>
            <Typography style={{width:'100%',color:'grey'}}>{title}</Typography>
            <Typography style={{width:'100%'}}>{description}</Typography>
            <Button style={{textTransform:'inherit',width:'100%',background:'lightgrey',color:'black'}}>Contact</Button>
        </Box>
      </>
  )
};

export default Card;
