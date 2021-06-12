export const useTabs = (initalTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initalTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
