export function add(a: number, b: number): number {
  return a + b
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  Deno.serve({ port: 4242, hostname: '0.0.0.0' }, (req) => {
    console.log(req)
    if (req.body) {
      const body = req.json()
      console.log('Body:', body)
    }
    return new Response('Hello, World!')
  })
  // console.log('Add 2 + 3 =', add(2, 3))
}
