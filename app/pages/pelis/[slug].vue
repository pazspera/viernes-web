<script setup lang="ts">

const route = useRoute();
const slug = String(route.params.slug ?? '');

const { data: moviesData } = await useAsyncData("movies",
	() => queryCollection("movies").first()
)

const moviesSorted = computed(() => (moviesData?.value?.movies ?? []).slice().sort((a, b) => a.id.localeCompare(b.id)));
const movie = computed(() => moviesSorted.value.find(m => m.id === slug));

</script>

<template>
	<div class="container mx-auto px-4 py-8">
		<NuxtLink to="/" class="text-sm text-slate-500">← Volver</NuxtLink>

		<div v-if="movie" class="mt-6">
			<h1 class="text-3xl font-bold">{{ movie.name }}</h1>
			<p class="text-slate-600 mt-1">{{ movie.year }} · {{ movie.duration }} · Dirección: {{ movie.director }}</p>

			<div class="mt-4 flex flex-col md:flex-row gap-6">
				<img v-if="movie.img_card" :src="movie.img_card" :alt="movie.img_card_alt" class="w-full md:w-1/3 object-cover rounded" />

				<div class="flex-1">
					<h2 class="text-xl font-semibold">Sinopsis</h2>
					<p class="mt-2 text-slate-700" v-html="movie.sinopsis"></p>

					<div v-if="movie.trailer_link" class="mt-4">
						<a :href="movie.trailer_link" target="_blank" rel="noopener noreferrer" class="text-indigo-600 underline">Ver trailer</a>
					</div>

					<div v-if="movie.cast?.length" class="mt-6">
						<h3 class="font-semibold">Reparto</h3>
						<div class="flex flex-wrap gap-4 mt-3">
							<div v-for="c in movie.cast" :key="c.actor" class="flex items-center gap-3">
								<img v-if="c.img" :src="c.img" :alt="c.actor" class="w-12 h-12 object-cover rounded-md" />
								<span class="text-sm text-slate-700">{{ c.actor }}</span>
							</div>
						</div>
					</div>

					<div v-if="movie.img_row?.length" class="mt-6">
						<h3 class="font-semibold">Imágenes</h3>
						<div class="flex gap-3 mt-3 overflow-x-auto">
							<img v-for="(r, idx) in movie.img_row" :key="idx" :src="r.img" :alt="r.alt" :class="r.class" />
						</div>
					</div>

				</div>
			</div>
		</div>

		<div v-else class="mt-8">
			<p class="text-slate-600">Película no encontrada para <strong>{{ slug }}</strong>.</p>
		</div>
	</div>
</template>

