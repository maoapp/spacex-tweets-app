if (typeof global.structuredClone === 'undefined') {
  global.structuredClone = (value) => {
    if (value === undefined) {
      return null; // Return a default value for undefined
    }
    if (typeof value === 'function') {
      throw new Error('structuredClone cannot handle functions.');
    }
    return JSON.parse(JSON.stringify(value));
  };
}
