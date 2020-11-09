import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  AccordionContent,
  AccordionItem,
  AccordionToggle
} from 'framework7-react';

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>nomis-play</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>nomis-play</NavTitleLarge>
    </Navbar>
    {/* Toolbar */}
    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>
    {/* Page content */}

    <BlockTitle>List View Accordion</BlockTitle>
    <List accordionList>
      <ListItem accordionItem title="Lorem Ipsum">
        <AccordionContent>
          <Block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Nested List">
        <AccordionContent>
          <List>
            <ListItem title="Item 1"></ListItem>
            <ListItem title="Item 2"></ListItem>
            <ListItem title="Item 3"></ListItem>
            <ListItem title="Item 4"></ListItem>
          </List>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Integer semper">
        <AccordionContent>
          <Block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>

    <BlockTitle>Inset Accordion</BlockTitle>
    <List accordionList inset>
      <ListItem accordionItem title="Lorem Ipsum">
        <AccordionContent>
          <Block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Nested List">
        <AccordionContent>
          <List>
            <ListItem title="Item 1"></ListItem>
            <ListItem title="Item 2"></ListItem>
            <ListItem title="Item 3"></ListItem>
            <ListItem title="Item 4"></ListItem>
          </List>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Integer semper">
        <AccordionContent>
          <Block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>

    <BlockTitle>Opposite Side</BlockTitle>
    <List accordionList accordionOpposite>
      <ListItem accordionItem title="Lorem Ipsum">
        <AccordionContent>
          <Block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Nested List">
        <AccordionContent>
          <List>
            <ListItem title="Item 1"></ListItem>
            <ListItem title="Item 2"></ListItem>
            <ListItem title="Item 3"></ListItem>
            <ListItem title="Item 4"></ListItem>
          </List>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Integer semper">
        <AccordionContent>
          <Block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>

    <BlockTitle>Custom Collapsible</BlockTitle>
    <Block inner accordionList>
      {Array.from(Array(3).keys()).map(n => (
        <AccordionItem key={n}>
          <AccordionToggle><b>Item {n + 1}</b></AccordionToggle>
          <AccordionContent>Content {n + 1}</AccordionContent>
        </AccordionItem>
      ))}
  </Block>

    <BlockTitle>Nomis Play</BlockTitle>
    <Block className="bg-color-lightblue">
      <Row className="bg-color-purple">
        <Col className="bg-color-green" width="60">Column 1
          <Row className="bg-color-gray">1.1</Row>
          <Row className="bg-color-gray">1.2</Row>
          <Row className="bg-color-gray">1.3</Row>
          <Row className="bg-color-purple">
            <Col className="bg-color-green" width="60">Col 1
              <Row className="bg-color-gray">1.1</Row>
              <Row className="bg-color-gray">1.2</Row>
              <Row className="bg-color-gray">1.3</Row>
              <Row className="bg-color-purple">
                <Col className="bg-color-green" width="60">C1
                  <Row className="bg-color-gray">1.1</Row>
                  <Row className="bg-color-gray">1.2</Row>
                  <Row className="bg-color-gray">1.3</Row>
                </Col>
                <Col className="bg-color-green" width="20">C2
                  <Row className="bg-color-gray">2.1</Row>
                  <Row className="bg-color-gray">2.2</Row>
                </Col>
                <Col className="bg-color-green" width="20">
                  <Row className="bg-color-gray">3.1</Row>
                  <Row className="bg-color-gray">3.2</Row>
                  <Row className="bg-color-gray">3.3</Row>
                </Col>
              </Row>
            </Col>
            <Col className="bg-color-green" width="20">Col 2
              <Row className="bg-color-gray">2.1</Row>
              <Row className="bg-color-gray">2.2</Row>
            </Col>
            <Col className="bg-color-green" width="20">
              <Row className="bg-color-gray">3.1</Row>
              <Row className="bg-color-gray">3.2</Row>
              <Row className="bg-color-gray">3.3</Row>
            </Col>
          </Row>
        </Col>
        <Col className="bg-color-green" width="20">Column 2
          <Row className="bg-color-gray">2.1</Row>
              <Row className="bg-color-purple">
                <Col className="bg-color-green" width="60">C1
                  <Row className="bg-color-gray">1.1</Row>
                  <Row className="bg-color-gray">1.2</Row>
                  <Row className="bg-color-gray">1.3</Row>
                </Col>
                <Col className="bg-color-green" width="20">C2
                  <Row className="bg-color-gray">2.1</Row>
                  <Row className="bg-color-gray">2.2</Row>
                </Col>
                <Col className="bg-color-green" width="20">
                  <Row className="bg-color-gray">3.1</Row>
                  <Row className="bg-color-gray">3.2</Row>
                  <Row className="bg-color-gray">3.2</Row>
                </Col>
              </Row>
          <Row className="bg-color-gray">2.3</Row>
        </Col>
        <Col className="bg-color-green" width="20">
          <Row className="bg-color-gray">3.1</Row>
          <Row className="bg-color-gray">3.2</Row>
          <Row className="bg-color-gray">3.3</Row>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Nomis Play — No gaps</BlockTitle>
    <Block className="bg-color-lightblue">
      <Row className="bg-color-purple no-gap">
        <Col className="bg-color-green" width="60">Column 1
          <Row className="bg-color-gray">1.1</Row>
          <Row className="bg-color-gray">1.2</Row>
          <Row className="bg-color-gray">1.3</Row>
          <Row className="bg-color-purple no-gap">
            <Col className="bg-color-green" width="60">Col 1
              <Row className="bg-color-gray">1.1</Row>
              <Row className="bg-color-gray">1.2</Row>
              <Row className="bg-color-gray">1.3</Row>
              <Row className="bg-color-purple no-gap">
                <Col className="bg-color-green" width="60">C1
                  <Row className="bg-color-gray">1.1</Row>
                  <Row className="bg-color-gray">1.2</Row>
                  <Row className="bg-color-gray">1.3</Row>
                </Col>
                <Col className="bg-color-green" width="20">C2
                  <Row className="bg-color-gray">2.1</Row>
                  <Row className="bg-color-gray">2.2</Row>
                </Col>
                <Col className="bg-color-green" width="20">
                  <Row className="bg-color-gray">3.1</Row>
                  <Row className="bg-color-gray">3.2</Row>
                  <Row className="bg-color-gray">3.3</Row>
                </Col>
              </Row>
            </Col>
            <Col className="bg-color-green" width="20">Col 2
              <Row className="bg-color-gray">2.1</Row>
              <Row className="bg-color-gray">2.2</Row>
            </Col>
            <Col className="bg-color-green" width="20">
              <Row className="bg-color-gray">3.1</Row>
              <Row className="bg-color-gray">3.2</Row>
              <Row className="bg-color-gray">3.3</Row>
            </Col>
          </Row>
        </Col>
        <Col className="bg-color-green" width="20">Column 2
          <Row className="bg-color-gray">2.1</Row>
              <Row className="bg-color-purple no-gap">
                <Col className="bg-color-green" width="60">C1
                  <Row className="bg-color-gray">1.1</Row>
                  <Row className="bg-color-gray">1.2</Row>
                  <Row className="bg-color-gray">1.3</Row>
                </Col>
                <Col className="bg-color-green" width="20">C2
                  <Row className="bg-color-gray">2.1</Row>
                  <Row className="bg-color-gray">2.2</Row>
                </Col>
                <Col className="bg-color-green" width="20">
                  <Row className="bg-color-gray">3.1</Row>
                  <Row className="bg-color-gray">3.2</Row>
                  <Row className="bg-color-gray">3.2</Row>
                </Col>
              </Row>
          <Row className="bg-color-gray">2.3</Row>
        </Col>
        <Col className="bg-color-green" width="20">
          <Row className="bg-color-gray">3.1</Row>
          <Row className="bg-color-gray">3.2</Row>
          <Row className="bg-color-gray">3.3</Row>
        </Col>
      </Row>
    </Block>

    <Block strong>
      <p>This is an example of split view application layout, commonly used on tablets. The main approach of such kind of layout is that you can see different views at the same time.</p>

      <p>Each view may have different layout, different navbar type (dynamic, fixed or static) or without navbar.</p>

      <p>The fun thing is that you can easily control one view from another without any line of JavaScript just using "data-view" attribute on links.</p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/about/" title="About"/>
      <ListItem link="/form/" title="Form"/>
    </List>

    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised panelOpen="right">Right Panel</Button>
        </Col>
      </Row>
    </Block>

    <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
        />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
        />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
        />
    </List>
  </Page>
);
