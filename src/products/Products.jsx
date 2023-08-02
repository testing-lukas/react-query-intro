import { Grid, LinearProgress } from "@mui/material";

import ProductCard from "../productCard/ProductCard";
import { getProducts } from "../api/api";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  });

  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Grid
          display="grid"
          gridTemplateColumns={"repeat(auto-fill, minmax(200px, 1fr))"}
          gap={2}
        >
          {data &&
            data.products?.map(prod => (
              <ProductCard
                id={prod.id}
                key={prod.id}
                title={prod.title}
                description={prod.description}
                thumbnail={prod.thumbnail}
              />
            ))}
        </Grid>
      )}
    </>
  );
};

export default Products;
