import Vue from 'vue'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Vuex)

describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
  let getters
  let actions
  let store
  let vm

  beforeEach(() => {
    getters = {
      foo: state => state.foo
    }

    actions = {
      enableFoo: sinon.stub(),
      disableFoo: sinon.stub()
    }

    store = new Vuex.Store({
      state: {
        foo: false
      },
      getters,
      actions
    })

    vm = new Constructor({ store }).$mount()
  })

  it('enable store Foo and local Bar', () => {
    vm.enableFooAndBar()
    expect(vm.isBar).to.equal(true)
    expect(actions.enableFoo.called).to.equal(true)
  })

  it('disable store Foo and local Bar', () => {
    vm.disableFooAndBar()
    expect(vm.isBar).to.equal(false)
    expect(actions.enableFoo.called).to.equal(false)
  })

  it('Watch foo changes', done => {
    expect(vm.watchedFoo).to.equal(false)
    store.state.foo = true

    vm.$nextTick(() => {
      expect(vm.watchedFoo).to.equal(true)
      done()
    })
  })

  it('computed fooAndBarIsTrue', () => {
    store.state.foo = true
    vm.isBar = true
    expect(vm.fooAndBarIsTrue).to.equal(true)

    store.state.foo = false
    vm.isBar = false
    expect(vm.fooAndBarIsTrue).to.equal(false)
  })
})
