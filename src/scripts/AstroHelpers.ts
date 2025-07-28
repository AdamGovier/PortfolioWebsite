function ToggleSelectorVisibility(selector: string) : void {
  const element = document.querySelector(selector);
  element?.classList.toggle("hidden");
}

function OnClick() {
  
}

window.ToggleSelectorVisibility = ToggleSelectorVisibility;