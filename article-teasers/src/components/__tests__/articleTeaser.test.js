import { render } from '@testing-library/react'
import ArticleTeaser from '../ArticleTeaser'

test("test article teaser exists", () => {
    const { container } = render(<ArticleTeaser />)
    expect(container.getElementsByClassName("article-teaser").length).toBe(1);

})