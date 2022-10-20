import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ProductService from '../../../services/product-service';

const pageSize = 3;

// eslint-disable-next-line no-unused-vars
const PaginationControlled = ({ productsPerPage, setProductsPerPage }) => {
  const [pagination, setPagination] = React.useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  React.useEffect(() => {
    ProductService.fetchProducts({ from: pagination.from, to: pagination.to }).then((response) => {
      setPagination({ ...pagination, count: response.count });

      setProductsPerPage(response.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from, to });
  };

  return (
    <Stack spacing={2} sx={{ alignItems: 'center', my: 6 }}>
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        shape="rounded"
        size="large"
        color="primary"
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default PaginationControlled;
