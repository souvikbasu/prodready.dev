/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default async (req, res) => {
  const url = process.env.GRAPHQL_SERVER;

  await axios
    .post(url, req.body)
    .then(({ data }) => {
      res.status(200).json({ ...data });
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
};
