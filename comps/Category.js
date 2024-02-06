import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';



const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 230,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: '20px',
  borderRadius: '50%',
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  borderRadius: '50%',
  bottom:'0px',
  display: 'flex',
  alignItems: 'down',
  justifyContent: 'center',
  color: "#e6949f",
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: '20px',
  borderRadius: '50%',
  backgroundColor: '#ede7f6',
  opacity: 0.3,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  borderRadius: '50%',
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Category =  ({id, categoryName, path, image}) =>{
  return (
      <div>
        {/* Wrap ImageButton with Link and pass the href */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
          <ImageButton href={path}
            focusRipple
            key={id}
            style={{
            width: '70%',
            borderRadius: '50%',
           }}
          >
          <ImageSrc style={{ backgroundImage: `url(${image})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                fontSize: 22,
                fontWeight: 75,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {categoryName}
              <ImageMarked className="MuiImageMarked-root" />
                </Typography>
          </Image>
        </ImageButton>
      </Box>
    </div>
  );
}
 export default Category;