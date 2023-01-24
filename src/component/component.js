import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { data } from "../data/data";

export function StudentDetails() {
  const [AgentsData, setAgentsData] = useState(data);

  return (
    <div className="card-container">
      {AgentsData.map((agent, id) => (
        <Card
          sx={{ maxWidth: 300 }}
          className="card-main"
          style={{ Height: 550 }}
        >
          <CardMedia
            sx={{ height: 100 }}
            key={agent.id}
            image={agent.images[0]}
            title={agent.title}
          />
          <CardContent className="card-sec">
            <Typography gutterBottom variant="h5" component="div">
              {agent.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {agent.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {agent.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rating: {agent.rating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brand: {agent.brand}
            </Typography>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Edit
              </Button>
              <Button size="small" variant="contained" color="error">
                Terminate
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
