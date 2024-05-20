// Checking in baby
router.get("/babyCheckin/:id", async (req, res) => {
    try {
      const sitters = await SitterRegistration.find({attendance:'clockedin'});
      const checkinBaby = await BabyRegistration.findOne({ _id: req.params.id });
      res.render("babyCheckin", { baby: checkinBaby, sitters: sitters });
    } catch (error) {
      console.log("Error checking-in baby", error);
      res.status(400).sendStatus("unable to check-in baby");
    }
  });
  router.post("/babyCheckin", async (req, res) => {
    try {
      await BabyRegistration.findByIdAndUpdate({ _id: req.query.id }, req.body);
      res.redirect("/babiesPresent");
    } catch (error) {
      res.status(400).sendStatus("unable to check-in baby");
    }
  });
  