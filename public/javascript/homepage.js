document.body.addEventListener("click", (e) => {
    if (!e.target.attributes[1]) return;
  
    //   console.log(e.target.children[0].textContent.substring(7));
    switch (e.target.attributes[1].value) {
      case "puzzle":
        return (location.href = `/${e.target.attributes[2].value}`);
      default:
        return;
    }
  });
  