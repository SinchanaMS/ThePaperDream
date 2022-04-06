export const wishlistReducer = (wishlistState, { type, payload }) => {
    switch (type) {
      case "GET_WISHLIST":
      case "ADD_TO_WISHLIST":
      case "DELETE_FROM_WISHLIST":
        return { ...wishlistState, wishlist: payload, wishlistCount: payload.length };
      default:
        return wishlistState;
    }
  };