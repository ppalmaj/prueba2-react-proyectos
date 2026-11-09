const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.deleteProject = functions.https.onCall(
  async (request) => {

    const projectId = request.data.id;

    await admin
      .firestore()
      .collection("projects")
      .doc(projectId)
      .delete();

    return {
      success: true,
      message: "Proyecto eliminado correctamente"
    };
  }
);