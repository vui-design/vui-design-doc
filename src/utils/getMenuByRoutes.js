/**
 * 通过路由列表获取菜单列表
 * @param {Array} routes 路由列表
 */
export default function getMenuByRoutes(routes) {
  let result = [];
  let groups = {};

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];

    if (!route.meta) {
      continue;
    }

    if (route.meta.title !== "guide" && route.meta.title !== "components") {
      continue;
    }

    for (let j = 0; j < route.children.length; j++) {
      const child = route.children[j];
      const item = {
        path: child.path,
        name: child.name,
        meta: {
          icon: child.meta.icon,
          title: child.meta.title
        }
      };
      const group = child.meta.group;

      if (group) {
        if (groups[group]) {
          groups[group].push(item);
        }
        else {
          groups[group] = [item];
        }
      }
      else {
        result.push(item);
      }
    }
  }

  for (let group in groups) {
    result.push({
      group: group,
      children: groups[group]
    });
  }

  return result;
};