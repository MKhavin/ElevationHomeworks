import userTemplate from "./templates/user.handlebars";
import userFriendsTemplate from "./templates/userFriends.handlebars";
import quoteTemplate from "./templates/quoteTemplate.handlebars";
import pokemonTemplate from "./templates/pokemonTemplate.handlebars"
import meatTemplate from "./templates/meatTemplate.handlebars"

class Renderer {
  renderUsers(users) {
    let newHTML = userTemplate(users.results[0]);
    $(".user-container").empty().append(newHTML);
  }

  renderFriends(users) {
    let friendsHTML = userFriendsTemplate({ friends: users.results.splice(1) });
    $(".friends-container").empty().append(friendsHTML);
  }

  renderQuote(quoteInfo) {
    let quoteHTML = quoteTemplate(quoteInfo);
    $(".quote-container").empty().append(quoteHTML);
  }

  renderPokemon(pokemonInfo) {
    let pokemonHTML = pokemonTemplate(pokemonInfo);
    $(".pokemon-container").empty().append(pokemonHTML);
  }

  renderMeat(meatText) {
    let meatHTML = meatTemplate({ text: meatText });
    $(".meat-container").empty().append(meatHTML);
  }

  render(data) {
    this.renderFriends(data.users);
    this.renderUsers(data.users);
    this.renderQuote(data.quote);
    this.renderPokemon(data.pokemon);
    this.renderMeat(data.meat);
  }
}

export default Renderer;
