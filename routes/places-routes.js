const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
  {
    id: "p2",
    title: "White house",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u2",
  },
  {
    id: "p3",
    title: "omg building 3",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  }

];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1'}
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  res.json({ place });
});

// getting list of places from user ID
router.get("/user/:uid", (req, res, next) => {
    const userId = req.params.uid
    console.log(userId)
    const userPlaces = DUMMY_PLACES.filter((p) => {
        return p.creator === userId
    })
    res.json(userPlaces)
})

module.exports = router;
