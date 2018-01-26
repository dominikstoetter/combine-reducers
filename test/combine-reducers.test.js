import combineReducers from '../src/combine-reducers'

const reducerCustomers = (state = [], action) => action.type === 'SET_CUSTOMER' ? {
	customer: action.customer
} : state
const reducerPonys = (state = [], action) => action.type === 'SET_PONY' ? {
	pony: action.pony
} : state

describe('combineReducers', () => {
	it('should add a customer and a pony into eachs state', () =>{
		const customer = {name: `customer-${Math.random(100)}`}
		const pony = {name: `pony-${Math.random(100)}`}

		const combinedReducers = combineReducers({
			reducerCustomers,
			reducerPonys
		});

		const firstState = combinedReducers({}, { type: 'SET_CUSTOMER', customer })
		expect(firstState.reducerCustomers.customer).toEqual(customer)

		const secondState = combinedReducers(firstState, { type: 'SET_PONY', pony })
		expect(secondState.reducerPonys.pony).toEqual(pony)
	})
})
