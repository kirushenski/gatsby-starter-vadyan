import React from 'react'
import { render } from '@test-utils'
import Layout from '@/components/Layout'

test('renders correctly', () => {
  const { container } = render(<Layout>Content</Layout>)
  expect(container).toMatchInlineSnapshot(`
    .emotion-15 {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
    }

    .emotion-9 {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-column-gap: 32px;
      grid-row-gap: 8px;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 16px;
      background-color: #362066;
      box-shadow: 0 0 8px 0 #362066;
      z-index: 1;
    }

    @media (max-width:767px) {
      .emotion-9 {
        grid-template-columns: auto 1fr;
        grid-column-gap: 16px;
      }
    }

    .emotion-0 {
      height: 104px;
      width: 104px;
      border-radius: 50%;
      background-color: #fcfaff;
    }

    @media (max-width:767px) {
      .emotion-0 {
        height: 64px;
        width: 64px;
      }
    }

    .emotion-2 {
      font-weight: 700;
      line-height: 1.5;
      font-size: 2.5rem;
    }

    @media (max-width:1439px) {
      .emotion-2 {
        font-size: calc(1.5rem + ((100vw - 48rem) / (42)) * (1));
      }
    }

    @media (max-width:767px) {
      .emotion-2 {
        font-size: 1.5rem;
      }
    }

    @media (max-width:767px) {
      .emotion-7 {
        grid-column: 2;
      }
    }

    .emotion-7 a:not(:last-child) {
      margin-right: 16px;
    }

    .emotion-3 {
      font-weight: 200;
      line-height: 1.5;
      font-size: 1.5rem;
      -webkit-transition: font-weight,300ms ease;
      transition: font-weight,300ms ease;
    }

    @media (max-width:1439px) {
      .emotion-3 {
        font-size: calc(1.125rem + ((100vw - 48rem) / (42)) * (0.375));
      }
    }

    @media (max-width:767px) {
      .emotion-3 {
        font-size: 1.125rem;
      }
    }

    .emotion-3:hover,
    .emotion-3.active {
      font-weight: 800;
    }

    .emotion-11 {
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      -webkit-align-content: start;
      -ms-flex-line-pack: start;
      align-content: start;
      grid-gap: 24px;
      padding-top: 48px;
      padding-right: 16px;
      padding-bottom: 48px;
      padding-left: 16px;
      background-color: #639;
    }

    @media (max-width:767px) {
      .emotion-11 {
        padding-top: 24px;
        padding-bottom: 24px;
      }
    }

    .emotion-13 {
      background-color: #362066;
      padding-top: 8px;
      padding-right: 16px;
      padding-bottom: 8px;
      padding-left: 16px;
      text-align: center;
      box-shadow: 0 0 8px 0 #362066;
      font-size: 0;
    }

    <div>
      <div
        class="emotion-15"
      >
        <header
          class="emotion-9 emotion-10"
        >
          <div
            class="emotion-0 emotion-1"
          />
          <a
            class="emotion-2"
            href="/"
          >
            Gatsby Starter Vadyan
          </a>
          <nav
            class="emotion-7 emotion-8"
          >
            <a
              class="emotion-3 emotion-4"
              href="/"
            >
              Quick start
            </a>
            <a
              class="emotion-3 emotion-4"
              href="/showcase/"
            >
              Showcase
            </a>
          </nav>
        </header>
        <main
          class="emotion-11 emotion-12"
        >
          Content
        </main>
        <footer
          class="emotion-13 emotion-14"
        >
          <a
            href="https://github.com/p1t1ch/gatsby-starter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              title="Project page on Github"
              width="48"
            />
          </a>
        </footer>
      </div>
    </div>
  `)
})
