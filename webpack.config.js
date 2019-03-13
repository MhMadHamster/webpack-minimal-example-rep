module.exports = {
	entry: {
		a: "./src/a",
		b: "./src/b",
	},
	mode: "development",
	optimization: {
		splitChunks: {
			chunks: "initial",
			cacheGroups: {
				a: {
					test: /vendor-a/,
					name: "vendor-a",
					enforce: true,
					priority: 1,
				},
				b: {
					test: /vendor/,
					name: "vendor-b",
					enforce: true,
				},
			}
		},
		runtimeChunk: "single",
	},
}
