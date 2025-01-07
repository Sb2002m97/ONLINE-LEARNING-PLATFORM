const sendCourseContentController = async (req, res) => {
  const { courseid } = req.params;

  try {
    const course = await courseSchema.findById(courseid);
    if (!course) {
      return res.status(404).send({ success: false, message: "No such course found" });
    }

    const user = await enrolledCourseSchema.findOne({
      userId: req.body.userId,
      courseId: courseid,
    });

    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    console.log("Course Content Sent:", course.sections);

    res.status(200).send({
      success: true,
      courseContent: course.sections,
      completeModule: user.progress || [],
      certficateData: user,
    });
  } catch (error) {
    console.error("Error in fetching course content:", error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};
