// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';

// export default function AddToCartButton() {
//   const [state, setState] = React.useState({
//     open: false,
//     vertical: 'top',
//     horizontal: 'center',
//   });

//   const { vertical, horizontal, open } = state;

//   const handleClick = (newState) => () => {
//     setState({ open: true, ...newState });
//   };

//   const handleClose = () => {
//     setState({ ...state, open: false });
//   };

//   const buttons = (
//     <React.Fragment> 
//       <Button
//         onClick={handleClick({
//           vertical: 'top',
//           horizontal: 'right',
//         })}
//       >
//         Add to cart
//       </Button> 
//     </React.Fragment>
//   );

//   return (
//     <div>
//       {buttons}
//       <Snackbar
//         anchorOrigin={{ vertical, horizontal }}
//         open={open}
//         onClose={handleClose}
//         message="Item added to cart"
//         key={vertical + horizontal}
//       />
//     </div>
//   );
// }

import React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

//   const handleClick = () => {
//     enqueueSnackbar('I love snacks.');
//   };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Item added to cart!', { variant });
  };

  return (
    <React.Fragment>
      {/* <Button onClick={handleClick}>Show snackbar</Button> */}
      <Button onClick={handleClickVariant('success')}>Add to Cart</Button>
    </React.Fragment>
  );
}

export default function AddToCartButton() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}