export function transformDataForSelect(data) {
  const transformData = data.map((d) => ({ value: d._id, label: d.name }));
  return transformData;
}
