module.exports = (data) => {
  const dataIds = data.map((d) => d._id.toString());
  return dataIds;
};
