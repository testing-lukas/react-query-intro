import {
  Button,
  Container,
  LinearProgress,
  List,
  ListItem
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import { getCategories } from "../api/api";

const Categories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories
  });

  const queryClient = useQueryClient();

  console.log(queryClient.getQueryData(["product", "5"]));

  return (
    <Container>
      <Button onClick={() => queryClient.resetQueries(["product", "5"])}>
        Reset data
      </Button>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <List>
          {categories.map(category => (
            <Link key={category} to={`/products/${category}`}>
              <ListItem>{category.replace("-", " ")}</ListItem>
            </Link>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Categories;
