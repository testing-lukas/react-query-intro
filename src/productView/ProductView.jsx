import {
  Container,
  ImageList,
  ImageListItem,
  LinearProgress
} from "@mui/material";

import { getProduct } from "../api/api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ProductView = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id)
  });

  console.table({
    isFetching,
    isLoading
  });

  return (
    <Container>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {data.images.map((image, index) => (
            <ImageListItem key={`${image}-${index}`}>
              <img src={image} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Container>
  );
};

export default ProductView;
