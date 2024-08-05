import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user-modal"
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!")
  }
  initialize(){
    this.element.setAttribute("data-action", "click->user-modal#showModal");
  }
  showModal(){
    event.preventDefault();
    this.url = this.element.getAttribute("href");
    console.log(this.url + " clicked");
  }
}
