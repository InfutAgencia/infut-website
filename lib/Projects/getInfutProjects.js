import axiosClient from "../../config/axios";

export const getInfutProjects = async () => {
  let projects = [];
  try {
    const res = await axiosClient.get("/projects");
    projects = res.data;
  } catch (error) {
    projects = [];
    console.log("Error gettin Projects", error);
  }

  return {
    projects,
  };
};
