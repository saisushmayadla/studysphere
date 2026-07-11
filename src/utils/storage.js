const KEY = "study_groups";

export const getGroups = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveGroups = (groups) => {
  localStorage.setItem(KEY, JSON.stringify(groups));
};

export const addGroup = (group) => {
  const groups = getGroups();
  groups.push(group);
  saveGroups(groups);
};

export const deleteGroup = (id) => {
  const groups = getGroups().filter((g) => g.id !== id);
  saveGroups(groups);
};

export const updateGroup = (updatedGroup) => {
  const groups = getGroups().map((g) =>
    g.id === updatedGroup.id ? updatedGroup : g
  );
  saveGroups(groups);
};