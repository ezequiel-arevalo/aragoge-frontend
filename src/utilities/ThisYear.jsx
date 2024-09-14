export const ThisYear = () => {
  const currentYear = new Date().getFullYear();

  return (
    <span>{currentYear}</span>
  )
}
