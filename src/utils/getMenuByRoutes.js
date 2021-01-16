/**
 * 通过路由列表获取菜单列表
 * @param {Array} routes 路由列表
 */
export default routes => {
  let result = [];
  let groups = {};

  routes.forEach(route => {
    if (!route.meta) {
      return;
    }

    if (route.meta.title !== "guide" && route.meta.title !== "components") {
      return;
    }

    route.children.forEach(child => {
      const target = {
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
          groups[group].push(target);
        }
        else {
          groups[group] = [target];
        }
      }
      else {
        result.push(target);
      }
    });
  });

  for (let group in groups) {
    result.push({
      group: group,
      children: groups[group]
    });
  }

  return result;
};