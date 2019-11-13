import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer J1J3t1CZ0NQRFkvSXmuAF3c_g3-G_D61x5pMheN63gndKvAhiymrvdmueVDQeTDy7U0ECrKcoWHzbFELtmB014GG7--G8IOoFfb95T5SvLN6iYaUxjyK4jFqoujJXXYx"
  }
});

// Client ID
// vYq5FDgEIxC0ldIoO1BoHA
