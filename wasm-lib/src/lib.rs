use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello(name: &str) -> String {
  return format!("Hello, {name}!").to_string();
}

#[wasm_bindgen]
pub fn good_bye(name: &str) -> String {
  return format!("Good bye, {name}!").to_string();
}
