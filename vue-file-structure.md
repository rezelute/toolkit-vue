<script setup lang="ts">
// IMPORTS

// COMPOSABLES & ROUTER
const route = useRoute()
const router = useRouter()
const someOtherComposable = useSomeComposable()

// PROPS & EMITS
defineProps<{}>()
defineEmits<{}>()

// LIFECYCLE
onMounted(() => console.info('mounted'))

// MODELS
const myModel = defineModel('myModel', { type: String, default: '' })

// CONSTANTS
const MY_CONSTANT = 42

// STATE & QUERIES
const counter = ref(0)
const user = reactive({ name: '', email: '' })
const { result, loading, error } = useQuery(MY_QUERY, { variables }, { immediate: true })
async function fetchData() { /* ... */ }

// COMPUTED
const doubled = computed(() => counter.value * 2)

// WATCHERS
watch(counter, val => console.info(val))

// METHODS
function increment() { counter.value++ }
</script>
