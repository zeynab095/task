import { render } from '@testing-library/react'
import ArticleTeasers from '../ArticleTeasers'

global.fetch = jest.fn();

test('test article teasers exist', () => {
    const { container } = render(<ArticleTeasers />)
    expect(container.getElementsByClassName("ab-testing").length).toBe(1);
})
