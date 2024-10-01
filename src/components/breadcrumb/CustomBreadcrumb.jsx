import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const CustomBreadcrumb = ({ items, currentTitle }) => {
  return (
    <Breadcrumb spacing="8px" separator={<GoArrowRight color="gray.500" />}>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={item.isCurrent}>
          {item.isLink ? (
            <BreadcrumbLink as={Link} to={item.to} c>
              {item.label}
            </BreadcrumbLink>
          ) : (
            <BreadcrumbLink>{item.label}</BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink className='cursor-pointer'>{currentTitle}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;