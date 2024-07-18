import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  let INIT_URL =
    "https://tse2.mm.bing.net/th?id=OIP.SDcfKR-iUDrbtPlEhk5ldAHaEy&pid=Api&P=0&h=180";

  const HOT_URL =
    "https://tse4.mm.bing.net/th?id=OIP.ss_1ci4KUfh86b7gWXIv-AHaE7&pid=Api&P=0&h=180";
  const COLD_URL =
    "https://tse2.mm.bing.net/th?id=OIP._0yJ9XSUlqYPXsIsYlMEwgHaE8&pid=Api&P=0&h=180";
  const RAIN_URL =
    "https://tse1.mm.bing.net/th?id=OIP.a6NJ8XKZ4PxKeAPOZ7Ps5wHaE8&pid=Api&P=0&h=180 ";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min Temp={info.tempMin}&deg;C</p>
              <p>Max Temp:{info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
