import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import defaultBurgerImg from "../../assets/burger.png";

type BurgerItemProps = {
  userId: string;
  name: string;
  brand: string;
  description: string;
};

const BurgerItem = ({ userId, name, brand, description }: BurgerItemProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={defaultBurgerImg}
        title="default burger image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {brand}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default BurgerItem;
