function getSaveFunc(name) {
  return `save${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

export default getSaveFunc;
