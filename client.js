import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Create three roots: thee flat panels on the left and the right, and one in the middle
  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.8, 0);
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.8, 0);
  const centerPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  centerPanel.setAngle(0, 0);
  r360.renderToSurface(
    r360.createRoot('TopPosts'),
    leftPanel,
  );
  r360.renderToSurface(
    r360.createRoot('CurrentPost'),
    rightPanel,
  );
  r360.renderToSurface(
    r360.createRoot('ImageView'),
    centerPanel,
  );

  r360.compositor.setBackground('./static_assets/newport.jpg');
}

window.React360 = {init};
