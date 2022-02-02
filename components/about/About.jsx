import Card from '../about/Card'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const About = (props) => {
  return(
      <Box style={{width:'100%',height:'100vh',marginTop:10,padding:'0 30px'}}>
        <Typography variant="h5">About</Typography>

        <Box style={{borderBottom:'1px solid lightgrey',width:'100%',margin:'20px 0'}}></Box>

        <Typography style={{marginBottom:40}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>

        <Box style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
          <Card 
            src="./john.jpg"
            name="John Doe"
            title="CEO & Founder"
            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
          />

          <Card 
            src="./jane.jpg"
            name="Jane Doe"
            title="Architect"
            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
          />


          <Card 
            src="./mike.jpg"
            name="Mike Ross"
            title="Architect"
            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
          />



          <Card 
            src="./dan.jpg"
            name="Dan Star"
            title="Architect"
            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
          />
        </Box>

      </Box>
  )
};

export default About;
