module: {   
  rules: [
    { 
      test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader"
    }   
  ] 
}
