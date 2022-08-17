import Box from 'components/Box';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" pt={10}>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#00DAC5"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </Box>
  );
};
